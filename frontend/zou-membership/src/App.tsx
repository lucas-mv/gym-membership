import { Box, Button, Collapsible, Grommet, Heading, ResponsiveContext } from "grommet";
import { Menu, Notification } from "grommet-icons";
import React, { useState } from "react";
import "./App.css";
import useGlobal from "./GlobalState";
import ZouRouter from "./ZouRouter";
import './ZouI18n'

function App() {
  const [globalState, _] = useGlobal();
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <Grommet full>
     <ResponsiveContext.Consumer>
       {size => (
          <Box fill>
            <AppBar>
              <img className="logo" src="images/zou.svg"></img>
              <Heading level='3' margin='none'>ぞう</Heading>
              <Button
                icon={<Menu />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
                <Box fill flex align='center' justify='center' className="page">
                  {globalState.loading}
                  {ZouRouter()}
                </Box>

                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width='medium'
                    background='light-2'
                    elevation='small'
                    align='center'
                    justify='center'
                  >
                    sidebar
                  </Box>
                </Collapsible>
            </Box>
          </Box>
       )}
     </ResponsiveContext.Consumer>
    </Grommet>
  );
}

const AppBar = (props: any) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export default App;
