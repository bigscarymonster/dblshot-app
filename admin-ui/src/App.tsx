import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { BlendList } from "./blend/BlendList";
import { BlendCreate } from "./blend/BlendCreate";
import { BlendEdit } from "./blend/BlendEdit";
import { BlendShow } from "./blend/BlendShow";
import { CoffeeBrandList } from "./coffeeBrand/CoffeeBrandList";
import { CoffeeBrandCreate } from "./coffeeBrand/CoffeeBrandCreate";
import { CoffeeBrandEdit } from "./coffeeBrand/CoffeeBrandEdit";
import { CoffeeBrandShow } from "./coffeeBrand/CoffeeBrandShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DBLSHOT Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Blend"
          list={BlendList}
          edit={BlendEdit}
          create={BlendCreate}
          show={BlendShow}
        />
        <Resource
          name="CoffeeBrand"
          list={CoffeeBrandList}
          edit={CoffeeBrandEdit}
          create={CoffeeBrandCreate}
          show={CoffeeBrandShow}
        />
      </Admin>
    </div>
  );
};

export default App;
