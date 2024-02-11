import {
    FormControl,
    FormLabel,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    Button,
    Input
  } from '@chakra-ui/react'


function SearchBody2() {
    return(
        <FormControl>
                <FormLabel>Start your search!</FormLabel>
                <Input placeholder='Enter a keyword' />
                
                <FormLabel mt={4}>Joy</FormLabel>
                <Slider defaultValue={60} min={0} max={300} step={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='#AFD6D9' />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>
            
                <FormLabel mt={4}>Sadness</FormLabel> 
                <Slider defaultValue={60} min={0} max={300} step={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='#AFD6D9' />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>
                
                <FormLabel mt={4}>Objectivity</FormLabel> 
                <Slider defaultValue={60} min={0} max={300} step={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='#AFD6D9' />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>
            
                <FormLabel mt={4}>Anger</FormLabel>
                <Slider defaultValue={60} min={0} max={300} step={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='#AFD6D9' />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>
                
                <FormLabel mt={4}>Grief</FormLabel>
                <Slider defaultValue={60} min={0} max={300} step={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='#AFD6D9' />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>

                <FormLabel mt={4}>Fear</FormLabel>
                <Slider defaultValue={60} min={0} max={300} step={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='#AFD6D9' />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>

                <FormLabel mt={4}>Optimism</FormLabel>
                <Slider defaultValue={60} min={0} max={300} step={30}>
                    <SliderTrack bg='red.100'>
                        <SliderFilledTrack bg='#AFD6D9' />
                    </SliderTrack>
                    <SliderThumb boxSize={6} />
                </Slider>

                <Button mt={4} colorScheme="teal" size="md">
                Search
                </Button>

        </FormControl>
    );
}

export default SearchBody2;
