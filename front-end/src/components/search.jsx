import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Button 
} from '@chakra-ui/react';

function Search() {
    return (
        <Menu>
            <MenuButton as={Button} colorScheme='pink'>
                Search
            </MenuButton>
            <MenuList>


                <MenuDivider />
                <MenuGroup title='Appropriateness'></MenuGroup>
                <MenuItem>
                    1
                    <Slider defaultValue={60} min={0} max={300} step={30}>
                        <SliderTrack bg='red.100'>
                            <SliderFilledTrack bg='#AFD6D9' />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                    </Slider>
                    10
                </MenuItem>
                <MenuGroup title='Readability'></MenuGroup>
                <MenuItem>
                    1
                    <Slider defaultValue={60} min={0} max={300} step={30}>
                        <SliderTrack bg='red.100'>
                            <SliderFilledTrack bg='#AFD6D9' />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                    </Slider>
                    10
                </MenuItem>
                <MenuGroup title='Neutrality'></MenuGroup>
                <MenuItem>
                    1
                    <Slider defaultValue={60} min={0} max={300} step={30}>
                        <SliderTrack bg='red.100'>
                            <SliderFilledTrack bg='#AFD6D9' />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                    </Slider>
                    10
                </MenuItem>
                <MenuGroup title='Educational Value'></MenuGroup>
                <MenuItem>
                    1
                    <Slider defaultValue={60} min={0} max={300} step={30}>
                        <SliderTrack bg='red.100'>
                            <SliderFilledTrack bg='#AFD6D9' />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                    </Slider>
                    10
                </MenuItem>
                <MenuGroup title='Positivity'></MenuGroup>
                <MenuItem>
                    1
                    <Slider defaultValue={60} min={0} max={300} step={30}>
                        <SliderTrack bg='red.100'>
                            <SliderFilledTrack bg='#AFD6D9' />
                        </SliderTrack>
                        <SliderThumb boxSize={6} />
                    </Slider>
                    10
                </MenuItem>
            </MenuList>
        </Menu>
    );
}

export default Search;
    