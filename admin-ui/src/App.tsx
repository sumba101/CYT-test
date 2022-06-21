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
import { PickupList } from "./pickup/PickupList";
import { PickupCreate } from "./pickup/PickupCreate";
import { PickupEdit } from "./pickup/PickupEdit";
import { PickupShow } from "./pickup/PickupShow";
import { TotalStatList } from "./totalStat/TotalStatList";
import { TotalStatCreate } from "./totalStat/TotalStatCreate";
import { TotalStatEdit } from "./totalStat/TotalStatEdit";
import { TotalStatShow } from "./totalStat/TotalStatShow";
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
        title={"CYT test"}
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
          name="Pickup"
          list={PickupList}
          edit={PickupEdit}
          create={PickupCreate}
          show={PickupShow}
        />
        <Resource
          name="TotalStat"
          list={TotalStatList}
          edit={TotalStatEdit}
          create={TotalStatCreate}
          show={TotalStatShow}
        />
      </Admin>
    </div>
  );
};

export default App;
