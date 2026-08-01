import * as THREE from 'three';
import { gsap } from 'gsap';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { randomInt } from '@lib/utils';

interface IScene {
	onLoad?: Function;
	onError?: Function;
	container?: HTMLDivElement | null;
	background?: number;
}

interface IHead {
	group: THREE.Object3D | null;
	mesh: THREE.SkinnedMesh | THREE.Mesh | null;
	bone: THREE.Bone | null;
};

export default class Scene {

	container: HTMLDivElement | null = null;
	onLoad: Function;
	onError: Function;
	background: number = 0x000000;
	timeline: TimelineLite | null;
	timeout: NodeJS.Timeout | null;
	renderer: THREE.WebGLRenderer | null = null;
	scene: THREE.Scene = new THREE.Scene();
	camera: THREE.Camera = new THREE.Camera();
	clock: THREE.Clock = new THREE.Clock();;
	head: IHead = { group: null, mesh: null, bone: null };
	mixer = null;
	material = null;
	show = true;
	lastDiv = null;
	mousePos = { x: 0, y: 0 };
	loader = new GLTFLoader();
	width = () => this.container?.getBoundingClientRect().width || 0;
	height = () => this.container?.getBoundingClientRect().height || 0;
	playFlag = true;
	supported = true;

	constructor({ onLoad = () => 0, onError = () => 0, container = null, background = 0xf5f7f9 }: IScene) {
		this.onLoad = onLoad;
		this.onError = onError;
		this.container = container;
		this.background = background;
		this.timeline = gsap.timeline({ onComplete: () => this.head.bone && this.noiseMove(this.head.bone) });
		this.timeout = null;
	}

	static isWebGLAvailable(): boolean {
		try {
			const canvas = document.createElement('canvas');
			return !!(
				window.WebGLRenderingContext &&
				(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
			);
		} catch {
			return false;
		}
	}


	//DOM
	init() {

		if (!Scene.isWebGLAvailable()) {
			this.supported = false;
			this.onError('webgl-unavailable');
			return;
		}
		if (this.renderer) { return; }
		this._init_();

		if (!this.renderer) {
			this.supported = false;
			this.onError('webgl-context-failed');
			return;
		}

		this._render_();
		this.events();
	}

	dispose() {
		window.removeEventListener('resize', this.onWindowResize.bind(this));
		window.removeEventListener('mousemove', this.onMouseMove.bind(this));
		this.playFlag = false;
		this.renderer?.dispose();
		if (this.renderer?.domElement?.parentNode) {
			this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
		}
		this.renderer = null;
	}

	events() {
		window.addEventListener('resize', this.onWindowResize.bind(this));
		window.addEventListener('mousemove', this.onMouseMove.bind(this));
		this.container?.addEventListener('touchmove', this.touchMove.bind(this), { passive: true });
	}

	//WebGL

	_init_() {

		this.setCanvasSize();

		try {
			this.renderer = new THREE.WebGLRenderer({ alpha: true });
		} catch {
			this.renderer = null;
			return;
		}

		//this.renderer.outputEncoding = THREE.sRGBEncoding;
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setClearColor(0xf5f7f9, 0);
		this.renderer.setSize(this.width(), this.height());
		this.container?.appendChild(this.renderer.domElement);

		this.scene = new THREE.Scene();
		//this.scene.background = new THREE.Color(this.background);

		this.camera = new THREE.PerspectiveCamera(16, this.width() / this.height(), 0.1, 1000);
		//this.camera.focalLength = 125;
		this.setCanvasSize();

		const light = new THREE.AmbientLight(0xF5F7F9, 1);
		if (this.scene) this.scene.add(light);

		this.importModel();



	}

	importModel() {

		this.loader.load(
			"/assets/models/model.gltf",
			(gltf) => {

				// flattens material
				gltf.scene.traverse(obj => {

					if (obj.name == "face")
						this.head.mesh = obj as THREE.Mesh;


					if (obj instanceof THREE.Mesh) {
						const materials = Array.isArray(obj.material)
							? obj.material
							: [obj.material];

						materials.forEach((mat) => {
							mat.flatShading = true;
							mat.needsUpdate = true;
						});
					}
				});


				this.head.group = gltf.scene.children[0] as THREE.Object3D;
				this.head.bone = gltf.scene.children[0].children[1].children[0] as THREE.Bone;

				if (this.head.mesh)
					this.closeEyes(this.head.mesh);

				if (this.head.bone) {
					this.head.bone.rotation.y = -1;
					//set animations
					this.noiseMove(this.head.bone);
				}

				if (this.head.group) {
					this.head.group.position.y = -0.065;
					this.scene.add(this.head.group);
				}


				if (this.onLoad) { this.onLoad(); }


			}, function (_) {

			}, function (_) {

			}
		);


	}

	_render_() {

		if (!this.playFlag || !this.renderer) { return; }

		this.renderer?.render(this.scene, this.camera);
		if (this.playFlag) { requestAnimationFrame(this._render_.bind(this)); }
	}

	//events

	setCanvasSize() {
		if (!this.camera) { return; }

		if (window.matchMedia('(orientation: landscape)').matches) {
			this.camera.position.z = 0.5;
			this.camera.position.y = 0.012;
		} else {
			this.camera.position.z = 0.6;
			this.camera.position.y = 0.030;
		}

	}

	onWindowResize() {

		if (this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {

			if (this.camera) {
				this.camera.matrixWorldNeedsUpdate = true;
				//this.camera.aspect = this.width() / this.height();
				//this.camera?.updateProjectionMatrix();
			}


			this.renderer?.setSize(this.width(), this.height());
			this._render_();
			this.setCanvasSize();

		}, 200);

	}

	onMouseMove(e: MouseEvent) {

		this.timeline?.clear();

		this.mousePos.x = -1 + (e.clientX / window.innerWidth) + 0.2;
		this.mousePos.y = -1 + (e.clientY / window.innerHeight) + 0.2;

		if (this.head.bone) {
			this.head.bone.rotation.x = this.mousePos.y;
			this.head.bone.rotation.y = this.mousePos.x + 0.8;
		}

		if (this.timeout) clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			if (this.head.bone)
				this.noiseMove(this.head.bone);
		}, 200);


	}

	pause() {
		if (!this.playFlag) { return; }
		this.playFlag = false;
		this.timeline?.pause();
	}

	play() {
		if (this.playFlag || !this.supported) { return; }
		this.playFlag = true;
		this._render_();

		if (this.head.bone)
			this.noiseMove(this.head.bone);
	}

	noiseMove(bone: THREE.Bone, speed = randomInt(2, 3)) {

		if (!bone) { return; }
		this.timeline?.to(bone.rotation, {
			duration: speed,
			overwrite: true,
			x: this.mousePos.y + randomInt(-2, 2) / 10,
			y: this.mousePos.x + 0.8 + randomInt(-1, 1) / 10,
			z: bone.rotation.z,
			ease: 'Power1.easeInOut'
		});
		this.timeline?.play();

	}

	closeEyes(mesh: THREE.Mesh) {
		if (!mesh || !mesh.morphTargetInfluences) { return; }
		const close = { value: 0 };
		const tl = gsap.timeline({
			duration: 0.1 + Math.random() - 0.3,
			onComplete: () => this.closeEyes(mesh),
			onUpdate: () => {
				if (mesh.morphTargetInfluences != undefined)
					mesh.morphTargetInfluences[0] = close.value;
			},
			delay: randomInt(1, 5),
			timeScale: 2
		});
		tl.to(close, { value: 1 });
		tl.to(close, { value: 0 });
	}


	touchMove(e: TouchEvent) {
		e.preventDefault();
		this.mousePos.x = e.touches[0].clientX / window.innerWidth - 1;
		this.mousePos.y = e.touches[0].clientY / window.innerHeight - 1;

	}




}
