import './VerticalSlider.css';

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import slider from '@/assets/image/slider.svg';

export default function VerticalSlider() {
  const pagination = {
    clickable: true,
    bulletActiveClass: 'pagination-active',
    renderBullet: function (index: number, className: string) {
      return `<span class="${className}">#${index + 1}</span>`;
    },
  };
  return (
    <>
      <Swiper direction={'vertical'} pagination={pagination} modules={[Pagination]}>
        <SwiperSlide>
          <p>Switch to the Japanese Candlesticks Chart</p>
          <img src={slider} alt="" />
          <p className={'desc'}>
            If the price of the asset goes up during the selected period, the candlestick
            turns <span>blue</span>, if it goes down, the candlestick turns{' '}
            <span>white.</span>
          </p>
          <p>
            Several candlesticks of the same color, forming a consecutive line, indicate a
            trend.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Switch to the Japanese Candlesticks Chart</p>
          <img src={slider} alt="" />
          <p className={'desc'}>
            If the price of the asset goes up during the selected period, the candlestick
            turns <span>blue</span>, if it goes down, the candlestick turns{' '}
            <span>white.</span>
          </p>
          <p>
            Several candlesticks of the same color, forming a consecutive line, indicate a
            trend.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Switch to the Japanese Candlesticks Chart</p>
          <img src={slider} alt="" />
          <p className={'desc'}>
            If the price of the asset goes up during the selected period, the candlestick
            turns <span>blue</span>, if it goes down, the candlestick turns{' '}
            <span>white.</span>
          </p>
          <p>
            Several candlesticks of the same color, forming a consecutive line, indicate a
            trend.
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Switch to the Japanese Candlesticks Chart</p>
          <img src={slider} alt="" />
          <p className={'desc'}>
            If the price of the asset goes up during the selected period, the candlestick
            turns <span>blue</span>, if it goes down, the candlestick turns{' '}
            <span>white.</span>
          </p>
          <p>
            Several candlesticks of the same color, forming a consecutive line, indicate a
            trend.
          </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
