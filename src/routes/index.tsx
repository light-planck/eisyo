import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute("/").createRoute({
	component: Index,
});

function Index() {
	return (
		<div>
			<h1>詠唱.com</h1>
			<div>
				<p>詠唱を確認できるサービスです。</p>
				<p>作品のネタバレを含む場合があります。</p>
			</div>
		</div>
	);
}
