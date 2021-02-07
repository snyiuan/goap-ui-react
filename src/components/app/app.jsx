import React from "react";
import { Layout } from "antd";
import HeadNav from "../head-nav/head-nav";
import MContent from "../m-content/m-content";
import MSider from "../m-sider/m-sider";
import MFooter from "../m-footer/m-footer";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <div>
      <Layout>
        <Header
          style={{
            width: "100%",
            position: "fixed",
            textAlign: "center",
            zIndex: 1,
            background: "#fff",
          }}
        >
          <HeadNav></HeadNav>
        </Header>
        <Layout>
          <Sider theme="light">
            <MSider></MSider>
          </Sider>
          <Content style={{ marginTop: "64px" }}>
            <MContent></MContent>
          </Content>
        </Layout>
        <Footer>
          <MFooter></MFooter>
        </Footer>
      </Layout>
    </div>
  );
};

App.prototype = {
  conditions: PropTypes.array.isRequired,
};

export default connect((state) => ({ conditions: state.models.conditions }), {
  //methods  mapDispatchToProps
})(App);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (id) => {
//       dispatch(toggleTodo(id));
//     },
//   };
// };
// const App = connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   static propTypes = {
//     conditions: PropTypes.array.isRequired,
//   };
//   render() {
//     return (
//       <>
//         <Layout>
//           <Header>
//             <HeadNav></HeadNav>
//           </Header>
//           <Layout>
//             <Sider>
//               <MSider></MSider>
//             </Sider>
//             <Content>
//               <MContent></MContent>
//             </Content>
//           </Layout>
//           <Footer>
//             <MFooter></MFooter>
//           </Footer>
//         </Layout>
//       </>
//     );
//   }
// }
