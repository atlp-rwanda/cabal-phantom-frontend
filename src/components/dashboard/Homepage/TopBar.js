import React from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import '../../../assets/styles/dashboard.scss'
import IconButton from '../helpers/IconButton'
import { Link } from "react-router-dom";

const TopBar = () => {
    return (
        <div className="topbar">
            <form action="">
                <InputGroup>
                    <Input placeholder="Search" />
                    <InputGroupAddon addonType="append">
                        <Button color="success"><SearchIcon style={{ fontSize: "2rem" }} /></Button>
                    </InputGroupAddon>
                </InputGroup>
            </form>
            <div className="">
                <Link to= "/admin"><IconButton outline Icon={<HomeIcon />} name={"Home"} className="ml-5" href="/admin"/></Link>
                <IconButton color="info" className="ml-5" Icon={<PersonOutlineIcon />} name={"Profile"} />
            </div>
        </div>
    );
}

export default TopBar;
