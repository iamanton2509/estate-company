import dart from './../images/services/dart.svg';
import globe from './../images/services/globe.svg';
import hourglass from './../images/services/hourglass.svg';
import presentation from './../images/services/presentation.svg';
import review from './../images/services/review.svg';
import sales from './../images/services/sales.svg';
import stacks from './../images/services/stacks.svg';
import support from './../images/services/support.svg';

const services = [
    {
        id: 1,
        title: "Worldwide",
        img: globe,
        description: 'Worldwide description'
    },
    {
        id: 2,
        title: 'Profit',
        img: stacks,
        description: 'Profit decsription'
    },
    {
        id: 3,
        title: 'Result', 
        img: dart,
        description: 'Result description'
    },
    {
        id: 4,
        title: 'Support',
        img: support,
        description: 'Support description'
    },
    {
        id: 5,
        title: 'Analysis',
        img: presentation,
        description: 'Analysis description'
    },
    {
        id: 6,
        title: 'Sales',
        img: sales,
        description: 'Sales description'
    },
    {
        id: 7,
        title: 'Fast',
        img: hourglass,
        description: 'Fast description'
    },
    {
        id: 8,
        title: 'Review',
        img: review,
        description: "We're recommended"
    },
];

export {services}