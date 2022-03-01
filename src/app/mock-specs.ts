import { Specs } from './Specs';

export const SPECS: Specs[] = [
  {
    id: 1,
    project_title: 'Feedback Page',
    details: 'Design a feedback page to add to one of SolaVieve products.',
    deadline: '27/02/2022',
    tech_stack: 'JavaScript, HTML, CSS',
    developers: 3,
    role: 'UI/UX design',
    reminder: false,
  },
  {
    id: 2,
    project_title: 'Project Specs Page',
    details: 'Design the perfect template in which you would like to receive the specifications of a new IT project you are in charge of.',
    deadline: '26/02/2022',
    tech_stack: 'Typescript, HTML, CSS',
    developers: 1,
    role: 'Front-end',
    reminder: false,
  },
  {
    id: 3,
    project_title: 'Frontend to the Backend',
    details: 'build a backend NodeJS server for persisting the feedback to Postgresql.',
    deadline: '28/02/2022',
    tech_stack: 'NodeJS, Postgresql, Angular',
    developers: 5,
    role: 'Backend',
    reminder: true,
  },
];