import React from 'react';

const AboutUs = () => {

  const heading1Style = {
    fontSize: '36px', 
    fontFamily: 'Calibri', // Can be changed to any font
    fontWeight: 'bold',
  };

  const heading2Style = {
    fontSize: '24px', // Adjust the size as needed
    fontFamily: 'Calibri', 
    fontWeight: 'bold',
  };

  const paragraphStyle = {
    fontSize: '16px', // Adjust the size as needed
    fontFamily: 'Calibri',
    // Add any other styles you want for paragraphs
  };

  return (
    <div>
      <h1 style={heading1Style}>About Us</h1>
      <p style={paragraphStyle}>
      The renovation of an ensuite led to the idea which became RenoPilot. That said, numerous earlier experiences with kitchens, bathrooms, laundries, fences, decks, pergolas, retaining walls, lots of paving and even a substantial concrete drive provided good background. In the early days we made mistakes and we didn’t always get what we wanted or expected and what we did get often cost more than we hoped. Fortunately, along the way we developed some skills which helped control the outcomes. 
      </p>
      <p style={paragraphStyle}>
      The ensuite wasn’t the final trigger. That was an electric sliding gate that cost the owner, a friend who had no external sources of accurate information to guide her, almost three times more than it should.
      </p>
      <p style={paragraphStyle}>But let’s go back to the ensuite. It was old and tired and desperately needed a makeover. We knew exactly what we wanted and approximately what it should cost. Being new to the city we asked some work contacts about contractors. One was the good friend of the son of one contact who was just starting out; the other had been around the block more than few times. Long story short, one fussed over every detail and didn’t really listen and the other spent perhaps 2 minutes in the room and another 3 under the house. The estimates were (and this is a few years ago now) “around $24,000” and “$15,000 will cover it”. $15,000 was about what we expected but the size of the difference prompted a more detailed review before we made a decision. The result: we got what we wanted and it cost about $15,000.
    </p>
    <p style={paragraphStyle}>The point is this: we knew how to create a design and prepare a fairly accurate estimate of the costs. As a result, there were no surprises. But what if you didn’t know how to generate the numbers? That is how it all started. The electric sliding gate confirmed there was an opportunity to help Homeowners contemplating property improvement or home renovation projects better understand their options and potential costs. 
     </p>
     <p style={paragraphStyle}>
     Today RenoPilot offers Homeowners the ability to design and cost many different types of projects.  
        To support our design and cost models we have added information about products and services available from all types of providers of goods and services – builders, contractors, sub-contractors, manufacturers, retailers and professionals who operate in a Homeowner’s postcode.
     </p>

     <h2 style={heading2Style}>Our Number One Objective </h2>

     <p style={paragraphStyle}>Our number one objective is to give Homeowners the ability to predict and control outcomes. Our design apps allow Homeowners to develop design solutions which meet their aspirations. Our cost apps tell Homeowners if their project fits their budget and give them the ability to explore options that can potentially reduce costs. 
     </p>
     <p style={paragraphStyle}>A Homeowner who knows what they want should be able to generate a design or cost estimate within a few minutes, certainly within 10 minutes of firing up the appropriate app. 
     </p>

     <h2 style={heading2Style}>Team</h2>
     <p style={paragraphStyle}>
     RenoPilot has a small core team supplemented from time to time by groups of final year computer science students enrolled in work integrated learning courses. The students bring a range of skills and creativity not tempered by budgetary or management constraints. We met two of the core team when they were students and we expect to meet many more. 
     </p>
     <p style={paragraphStyle}>
     To date the maximum number of students who have worked on our projects at any one time is 40, in 7 separate teams. We hope to work with Universities which offer work integrated learning courses for as long as we have new projects to develop. The opportunity to tap into cutting edge skills and new ideas is both exciting and rewarding. 
     </p>
      
    </div>
  );
};

export default AboutUs;
