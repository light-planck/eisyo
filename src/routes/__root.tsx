import { Icons } from "@/components/icons";
import { SITES_CONFIG } from "@/lib/sites-config";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="flex space-x-4 align-middle">
				<div className="p-2 gap-2">
					<Link
						to="/"
						activeProps={{
							className: "font-bold",
						}}
					>
						詠唱.com
					</Link>{" "}
					<Link
						to="/players"
						activeProps={{
							className: "font-bold",
						}}
					>
						人物
					</Link>
					<Link
						to="/works"
						activeProps={{
							className: "font-bold",
						}}
					>
						作品
					</Link>
				</div>
				<Link to={SITES_CONFIG.links.github}>
					<Icons.gitHub className="w-6 h-6" />
				</Link>
			</div>
			<hr />
			<div className="p-4">
				<Outlet />
			</div>
		</>
	),
});
