import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";
import favoriteApi from "../../api/modules/favorite.api";
import userApi from "../../api/modules/user.api";
import { setListFavorites, setUser } from "../../redux/features/userSlice";
import AuthModal from "../common/AuthModal";
import Footer from "../common/Footer";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const authUser = async () => {
      try {
        const { response } = await userApi.getInfo();
        dispatch(setUser(response || null));
      } catch (error) {
        dispatch(setUser(null));
        toast.error("Failed to fetch user data.");
      }
    };

    authUser();
  }, [dispatch]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const { response } = await favoriteApi.getList();
        dispatch(setListFavorites(response || []));
      } catch (error) {
        toast.error("Failed to fetch favorite list.");
      }
    };

    if (user) getFavorites();
    if (!user) dispatch(setListFavorites([]));
  }, [user, dispatch]);

  return (
    <>
      <GlobalLoading />
      <AuthModal />
      <Box display="flex" minHeight="100vh">
        <Topbar />
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default MainLayout;




// import { Box } from "@mui/material";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import { toast } from "react-toastify";
// import favoriteApi from "../../api/modules/favorite.api";
// import userApi from "../../api/modules/user.api";
// import { setListFavorites, setUser } from "../../redux/features/userSlice";
// import AuthModal from "../common/AuthModal";
// import Footer from "../common/Footer";
// import GlobalLoading from "../common/GlobalLoading";
// import Topbar from "../common/Topbar";

// const MainLayout = () => {
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state.user);

//   useEffect(() => {
//     const authUser = async () => {
//       const { response, err } = await userApi.getInfo();

//       if (response) dispatch(setUser(response));
//       if (err) dispatch(setUser(null));
//     };

//     authUser();
//   }, [dispatch]);

//   useEffect(() => {
//     const getFavorites = async () => {
//       const { response, err } = await favoriteApi.getList();

//       if (response) dispatch(setListFavorites(response));
//       if (err) toast.error(err.message);
//     };

//     if (user) getFavorites();
//     if (!user) dispatch(setListFavorites([]));
//   }, [user, dispatch]);

//   return (
//     <>
//       {/* global loading */}
//       <GlobalLoading />
//       {/* global loading */}

//       {/* login modal */}
//       <AuthModal />
//       {/* login modal */}

//       <Box display="flex" minHeight="100vh">
//         {/* header */}
//         <Topbar />
//         {/* header */}

//         {/* main */}
//         <Box
//           component="main"
//           flexGrow={1}
//           overflow="hidden"
//           minHeight="100vh"
//         >
//           <Outlet />
//         </Box>
//         {/* main */}
//       </Box>

//       {/* footer */}
//       <Footer />
//       {/* footer */}
//     </>
//   );
// };

// export default MainLayout;





