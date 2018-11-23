import React from 'react'
import { purpleBlue } from './ui/colors';
import LucasVieira from '../images/lucas-assis-vieira.png';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Image = () => (
  <div style={style.div}>
    <img src={LucasVieira} alt="Lucas Viera" style={style.img} />
  </div>
)

const style = {
  div: {
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    width: '100%',
    height: '150px'
  },
  img: {
    borderRadius: '50%',
    boxSizing: 'border-box',
    padding: '10px',
    border: `1px solid ${purpleBlue}`,
    marginBottom: '15px',
    maxWidth: '150px',
    maxHeight: '150px',
  }
}

export default Image


