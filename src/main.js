import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AspectBox=styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => (props.color)};
`

const FlexBox =styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ViewportSize =styled.div`
  font-size: 10vw;
`

const data = { "body": [ "NO",
   			 "NO!",
			 "NO!!!!!!!!!!",
			 "NOOOOOOOO!!!!!!!!!",
			 "HELL",
			 "NO!"
		       	]
	 }

const SayColor = () => {

    const [steps, setSteps] = useState(0);
    

    useEffect(() => {	
	const interval = setInterval(() => {
	    setSteps(steps =>steps + 1);
	}, 1000);
	return () => clearInterval(interval);
    }, []);
	
    return (
	    <p>{data.body[steps]}{steps === data.body.length ? setSteps(steps=>0) : "" }</p>
    );
    
}

export default function() {
    return (
<div>
	    <AspectBox color="red">
	    <FlexBox>
	    <ViewportSize>
	    <SayColor />
	    </ViewportSize>
	    </FlexBox>
	    </AspectBox>
</div>
    )
}



