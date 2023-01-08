import React from 'react';
import ImgHero from '../../assets/images/img-hero.jpg';
import ImgHeroFrame from '../../assets/images/img-hero-frame.jpg';
import IconCities from '../../assets/images/icons/icon-cities.svg';
import IconTraveler from '../../assets/images/icons/icon-traveler.svg';
import IconTreasure from '../../assets/images/icons/icon-treasure.svg';
import Button from '../Button';
import formatNumber from '../../utils/formatNumber';

const Hero = ({ data, refMostPicked }) => {
  const showMostPicked = () => {
    window.scrollTo({
      top: refMostPicked.current.page.offsetTop - 30,
      behavior: 'smooth',
    });
  };

  return (
    <section className='container pt-4'>
      <div className='row align-items-center'>
        <div className='col-auto pr-5' style={{ width: 512 }}>
          <h1 className='font-weight-bold line-height-1 mb-3'>
            Forget Busy Work, <br /> Start Next Vacation
          </h1>
          <p
            className='text-gray-500 font-weight-light mb-4 w-75'
            style={{ lineHeight: '170%' }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            type={'button'}
            onClick={showMostPicked}
            className='btn px-5'
            hasShadow
            isPrimary
          >
            Show Me Now
          </Button>
          <div className='row' style={{ marginTop: 82 }}>
            <div className='col-auto' style={{ marginRight: 35 }}>
              <img
                width={32}
                height={32}
                src={IconTraveler}
                alt='icon travelers'
              />
              <h6 className='mt-3'>
                {formatNumber(data.travelers)}{' '}
                <span className='font-weight-light text-gray-500'>
                  travelers
                </span>
              </h6>
            </div>
            <div className='col-auto' style={{ marginRight: 35 }}>
              <img
                width={32}
                height={32}
                src={IconTreasure}
                alt='icon treasure'
              />
              <h6 className='mt-3'>
                {formatNumber(data.treasures)}{' '}
                <span className='font-weight-light text-gray-500'>
                  treasure
                </span>
              </h6>
            </div>
            <div className='col-auto'>
              <img width={32} height={32} src={IconCities} alt='icon cities' />
              <h6 className='mt-3'>
                {formatNumber(data.cities)}{' '}
                <span className='font-weight-light text-gray-500'>cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className='col-6 pl-5'>
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImgHero}
              alt='img-hero'
              className='img-fluid position-absolute'
              style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
            />
            <img
              src={ImgHeroFrame}
              alt='img-hero-frame'
              className='img-fluid position-absolute'
              style={{ margin: '0 -15px -15px 0' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
