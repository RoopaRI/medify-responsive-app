import { Container, Box, Stack } from "@mui/material";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
    return (
        <div>
            <NavBar />
            <HeroSlider />
        </div>
        
    )
}