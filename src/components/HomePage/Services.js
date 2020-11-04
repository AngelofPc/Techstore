import React, { Component } from 'react';
import styled from 'styled-components';
import { FaDollarSign, FaDolly, FaRedo } from 'react-icons/fa';

export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: 'Free shipping',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic nemo dolores rerum tempore ipsam officiis voluptatum iure similique delectus. Quam similique repellendus fugit veniam doloribus non vel modi optio!',
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: '30 Days return',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic nemo dolores rerum tempore ipsam officiis voluptatum iure similique delectus. Quam similique repellendus fugit veniam doloribus non vel modi optio!',
      },
      {
        id: 3,
        icon: <FaDollarSign />,
        title: 'Secured Payment',
        text:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam hic nemo dolores rerum tempore ipsam officiis voluptatum iure similique delectus. Quam similique repellendus fugit veniam doloribus non vel modi optio!',
      },
    ],
  };

  render() {
    return (
      <ServicesWrapper className='py-5'>
        <div className='container'>
          <div className='row'>
            {this.state.services.map((item) => {
              return (
                <div
                  className='col-10 mx-FaAutoprefixer col-sm-6 col-md-4 text-center my-3'
                  key={item.id}>
                  <div className='service-icon'>{item.icon}</div>
                  <div className='mt-3 text-capitalize'>{item.title}</div>
                  <div className='mt-3'>{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServicesWrapper>
    );
  }
}

const ServicesWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);
  .service-icon {
    color: var(--primaryColor);
    font-size: 2.5rem;
  }
  p {
    color: var(--darkGrey);
  }
`;
