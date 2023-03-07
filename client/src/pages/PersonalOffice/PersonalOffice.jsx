import { Container } from "@mui/system"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import UserData from "./components/UserData";

import BreadCrumbs from "../../components/BreadCrumbs";




import './PersonalOffice.scss';
import Preloader from "../../components/Preloader";

const PersonalOffice = () => {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container className="main-list" maxWidth="lg">
            {/*  <Preloader open={ pageLoading } /> */}
            <BreadCrumbs linksArray={[{ link: "/personal-office", text: "Personal office" }]} />
            <p className="header-personal-office">Personal <span className="header-personal-office__span">office</span></p>


            <TabContext value={value} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList className="tab-list" onChange={handleChange}    TabIndicatorProps={{sx:{backgroundColor:"green", height:"3px"}}}
          sx={{ 
             // задаем цвет со старта
             "& button": {color:"greey", backgroundColor: "white", transition: '0.7s'},
             "& button.Mui-selected": {color:"green", backgroundColor: "#d6e3d1", borderTopLeftRadius: "10px"/* , fontWeight: "700" */},
             // Задаем цвет активной вкладке
             "& button:focus": {color:"green" },
          }}>
                            <Tab label="My data" value="1" />
                            <Tab label="History of orders" value="2" />
                            <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1"><UserData/></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>

        </Container>
    )
}

export default PersonalOffice