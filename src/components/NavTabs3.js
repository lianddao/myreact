import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

function LinkTab(props) {

    return (
        <Tab
            sx={{color:'white'}}
            component="a"
            onClick={(event) => {
                event.preventDefault();
            }}
            {...props}
        />
    );
}


export default function NavTabs3() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{width: '100%'}}>
            <Tabs value={value} onChange={handleChange} aria-label="nav tabs example"
                  textColor="secondary"
                  indicatorColor="secondary"
                  sx={{"&& .Mui-selected": {color: 'yellow'}}}
            >
                <LinkTab label="Page One" href="/产品/所有产品表格" />
                <LinkTab label="Page Two" href="/产品/产品种类表格" />
                <LinkTab label="Page Three" href="/spam" />
            </Tabs>
        </Box>
    );
}
