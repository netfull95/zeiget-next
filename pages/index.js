import React from 'react'
import { Button, Icon } from 'antd'

import SectionBanners from 'components/SectionBanners'
import SectionProductListItem from 'components/SectionProductListItem'
import Notification from 'components/Notification'
import bigdaddy from 'hocs/bigdaddy'
import style from './index.scss'

class Index extends React.Component {

  static info = {
    title: 'Home',
    style
  }

  componentDidMount() {
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        animateOut: 'fadeOut',
        // animateIn: 'flipInX',
        nav:true,
        loop:true,
        items: 1,
        smartSpeed:450,
        navText: [
           "<span class='is-carousel is-carousel-prev'><</i></span>",
           "<span class='is-carousel is-carousel-next'>></span>"
        ]
      });
      // $( ".owl-prev").html('<i class="fa fa-chevron-left"></i>');
      // $( ".owl-next").html('<i class="fa fa-chevron-right"></i>');
    });

  }

  render() {
    return (
      <div>
        <div className="owl-carousel">
          <div><img src="http://wp.nootheme.com/umbra/wp-content/uploads/homeslider1.jpg" /></div>
          <div><img src="http://wp.nootheme.com/umbra/wp-content/uploads/Home-V1-_-Slide-2.jpg" /></div>
          <div><img src="http://wp.nootheme.com/umbra/wp-content/uploads/Home-V1-Slide-3.jpg" /></div>
        </div>

        <SectionBanners />
        <SectionProductListItem />

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default bigdaddy(Index)
