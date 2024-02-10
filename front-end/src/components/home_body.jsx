import { Grid, GridItem } from '@chakra-ui/react'

function HomeBody() {
    return (
        <Grid
            h='1434px'
            w='1440px'
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(2, 1fr)'
            //gap={4}
        >
            <GridItem rowSpan={2} colSpan={1} bg='#AFD6D9' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={2} bg='papayawhip' />
            <GridItem colSpan={4} bg='tomato' />
        </Grid>
    )
}

export default HomeBody;

/*

position: absolute;
width: 1440px;
height: 1434px;
left: 0px;
top: 145px;

background: #AFD6D9;



position: absolute;
width: 925px;
height: 525px;
left: 34px;
top: 37px;

background: #FFFFFF;



position: absolute;
width: 418px;
height: 1350px;
left: 984px;
top: 37px;

background: #FFFFFF;



position: absolute;
width: 925px;
height: 789px;
left: 34px;
top: 598px;

background: #FFFFFF; */


