import { Dashboard } from "../components/Dashboard/Dashboard";
import jwt from "jsonwebtoken";
import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { 
	useDispatch,
	useSelector,
	logoutUser, 
} from "@/lib/redux";

export const getServerSideProps = async ({ req, res }: any) => {
	const cookie = getCookie("token", { req, res });
	if (!cookie) return { props: { isAuthenticated: false } };

	try {
		const isAuthenticated = await jwt.verify(
			cookie as string,
			process.env.JWT_SECRET as string,
		);
		return { props: { isAuthenticated: isAuthenticated } };
	} catch (err) {
		return { props: { isAuthenticated: false } };
	}
};

export default function DashboardPage({ isAuthenticated }: any) {
    const dispatch = useDispatch();
	const isLoggedIn = useSelector((state) => state.auth?.isLoggedIn);
	const router = useRouter();
	const currentUser = useSelector((state) => state.auth?.user);
	useEffect(() => {

		if (!isAuthenticated || !isLoggedIn) {
			dispatch(logoutUser(currentUser));
			router.push("/signin");
		}
	}, [isAuthenticated, isLoggedIn]);

    return (
        <Dashboard />
    );
}