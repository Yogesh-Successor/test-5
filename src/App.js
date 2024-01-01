import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import NoPage from "./pages/NoPage";

function App(){
    return(
      <Home />
    // <BrowserRouter>
    // <Routes>
    //   <Route path="/" element = {<Layout />}>
    //     <Route index element = {<Home />}/>
    //     <Route path="blog" element = {<Blog />}/>
    //     <Route path = "*" element={<NoPage />}/>
    //   </Route>
    // </Routes>
    // </BrowserRouter>

    )
}
export default App