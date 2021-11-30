import { Container } from '@mui/material';
import React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  }));
  
  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
  }));
  
  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

const Blog = () => {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    return (
        <Container>
            <Typography
        sm={12}
               sx={{ display: 'inline' }}
               component="div"
               variant="h3"
               color="text.primary"
             >
               My Blog
             </Typography> 
            <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is JavaScript?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area. <br />
          HTML is the markup language that we use to structure and give meaning to our web content, for example defining paragraphs, headings, and data tables, or embedding images and videos in the page.
            CSS is a language of style rules that we use to apply styling to our HTML content, for example setting background colors and fonts, and laying out our content in multiple columns.
            JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Express web framework (Node.js/JavaScript)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          Express is a popular unopinionated web framework, written in JavaScript and hosted within the Node.js runtime environment. This module explains some of the key benefits of the framework, how to set up your development environment and how to perform common web development and deployment tasks.
            <br />
        <strong>Prerequisites</strong> <br />
        Before starting this module you will need to understand what server-side web programming and web frameworks are, ideally by reading the topics in our Server-side website programming first steps module. A general knowledge of programming concepts and JavaScript is highly recommended, but not essential to understanding the core concepts.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Getting started with React</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          In this article we will say hello to React. We'll discover a little bit of detail about its background and use cases, set up a basic React toolchain on our local computer, and create and play with a simple starter app — learning a bit about how React works in the process.
          <br />
          As its official tagline states, React is a library for building user interfaces. React is not a framework – it's not even exclusive to the web. It's used with other libraries to render to certain environments. For instance, React Native can be used to build mobile applications. <br />

        To build for the web, developers use React in tandem with ReactDOM. React and ReactDOM are often discussed in the same spaces as — and utilized to solve the same problems as — other true web development frameworks. When we refer to React as a "framework", we’re working with that colloquial understanding.
        <br />
        React's primary goal is to minimize the bugs that occur when developers are building UIs. It does this through the use of components — self-contained, logical pieces of code that describe a portion of the user interface. These components can be composed together to create a full UI, and React abstracts away much of the rendering work, leaving you to concentrate on the UI design.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>JavaScript building blocks</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          In this module, we continue our coverage of all JavaScript's key fundamental features, turning our attention to commonly-encountered types of code blocks such as conditional statements, loops, functions, and events. You've seen this stuff already in the course, but only in passing — here we'll discuss it all explicitly. <br />
          In any programming language, code needs to make decisions and carry out actions accordingly depending on different inputs. For example, in a game, if the player's number of lives is 0, then it's game over. In a weather app, if it is being looked at in the morning, show a sunrise graphic; show stars and a moon if it is night. In this article we'll explore how conditional structures work in JavaScript.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Asynchronous JavaScript</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography sx={{textAlign:"left"}}>
          In this module we take a look at asynchronous JavaScript, why it is important, and how it can be used to effectively handle potential blocking operations such as fetching resources from a server. <br />
          In this article we'll run through a number of important concepts relating to asynchronous programming, and how this looks in web browsers and JavaScript. You should understand these concepts before working through the other articles in the module. <br />

            Introducing asynchronous JavaScript
            In this article we briefly recap the problems associated with synchronous JavaScript, and take a first look at some of the different asynchronous JavaScript techniques you'll encounter, showing how they can help us solve such problems. <br />

            Cooperative asynchronous JavaScript: Timeouts and intervals
            Here we look at the traditional methods JavaScript has available for running code asynchronously after a set time period has elapsed, or at a regular interval (e.g. a set number of times per second), talk about what they are useful for, and look at their inherent issues. <br />

            Handling async operations gracefully with Promises
            Promises are a comparatively new feature of the JavaScript language that allow you to defer further actions until after the previous action has completed, or respond to its failure. This is really useful for setting up a sequence of operations to work correctly. This article shows you how promises work, where you'll see them in use in WebAPIs, and how to write your own. <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
        </Container>
    );
};

export default Blog;