"use client"

import { useState } from "react"
import { Video } from "./video"
import { Overlay } from "./overlay"

export default function VideoWrapper() {
	const [open, setOpen] = useState(false);

	return (
		<>
			<Video
				posterSrc="/assets/showreel.webp"
				previewSrc="/assets/short_showreel.webm"
				onOpen={() => setOpen(true)}
				paused={open}
			/>

			<Overlay
				open={open}
				onClose={() => setOpen(false)}
			>
				<div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
					<iframe src="https://player.vimeo.com/video/502699503?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
						referrerPolicy="strict-origin-when-cross-origin"
						style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
						title="Showreel">
					</iframe>
				</div>
				<script src="https://player.vimeo.com/api/player.js"></script>
			</Overlay>
		</>
	)
}
