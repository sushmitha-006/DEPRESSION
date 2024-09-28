import React from 'react';
import { useState } from 'react';
import "./Resources.css";

//Darkness Visible
//The Noonday Demon
//I Don't Want to Talk About It: Overcoming the Secret Legacy of Male Depression


const books = [

  { title: 'The Gift of Fear', author: 'Susan Jeffers', category: 'Fear',imageUrl: 'https://miro.medium.com/v2/resize:fit:750/format:webp/1*wgQgEj4NQXrKwl82Qz_EDg.jpeg' },
  { title: 'Feel The Fear And Do It Anyway', author: 'Gavin de Becker', category: 'Fear',imageUrl: "https://m.media-amazon.com/images/I/514o8TOEmKL._SY445_SX342_.jpg"},
  { title: 'On fear', author: ' Jiddu Krishnamurti', category: 'Fear' ,imageUrl: 'https://m.media-amazon.com/images/I/511u8t1DEHL._SY445_SX342_.jpg'},
  { title: 'Cant Hurt Me: Master Your Mind and Defy the Odds', author: 'David Goggins', category: 'Fear',imageUrl: 'https://m.media-amazon.com/images/I/41amV20d1uL._SY445_SX342_.jpg' },
  { title: 'Rejection Proof: How I Beat Fear and Became Invincible Through 100 Days of Rejection', author: ' Jia Jiang', category: 'Fear',imageUrl: "https://m.media-amazon.com/images/I/4144WlEOuTL._SY445_SX342_.jpg" },

  { title: 'Dare: The New Way to End Anxiety', author: 'Barry McDonagh', category: 'Anxiety' ,imageUrl: 'https://m.media-amazon.com/images/I/71PCXyWhQLL._SY466_.jpg'},
  { title: 'Fear and Anxiety-The Science of Mental Health  ', author: 'Steven E. Hyman', category: 'Anxiety',imageUrl: 'https://m.media-amazon.com/images/I/31qXSaASevL.jpg' },
  { title: 'Unwinding Anxiety: ', author: 'Judson A. Brewer', category: 'Anxiety',imageUrl: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSZ-S9eUzpXwd3Ez9CWOhmjHoB7p4-CgngtvZGQePwzaHjpAd9' },
  { title: 'Anxiety: Panicking About Panic', author: 'Edmund J. Bourne', category: 'Anxiety' ,imageUrl: 'https://m.media-amazon.com/images/I/61MgRwfW2LL._SY466_.jpg'},
  { title: 'Notes on a Nervous Planet', author: 'Matt Haig', category: 'Anxiety' ,imageUrl: 'https://th.bing.com/th/id/OIP.cj-LPe-bEyfUQ8545MypFAHaJ2?w=125&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'},
  { title: 'The Noonday Demon', author: ' Andrew Solomon', category: 'Popular',imageUrl: 'https://th.bing.com/th/id/OIP.8WjKl52CHdrtKxrzk5VgbAHaLV?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7' },
  { title: 'Darkness Visible', author: 'William Golding', category: 'Popular' ,imageUrl: 'https://th.bing.com/th/id/OIP.2xEbLMjrIhS_KLhsTRTcegHaN9?rs=1&pid=ImgDetMain'},
  { title: 'Cognitive Behavioural Therapy Made Simple', author: 'Seth Gillihan', category: 'Popular' ,imageUrl: 'https://m.media-amazon.com/images/I/61lIg3w8EiL._AC_UF1000,1000_QL80_.jpg'},
  { title: 'I Dont Want to Talk About It', author: 'Terrence Real', category: 'Popular',imageUrl: 'https://m.media-amazon.com/images/I/71Aiwo2yibL._AC_UF1000,1000_QL80_.jpg' },
  { title: 'The Anxiety and Phobia Workbook', author: ' Edmund Bourne', category: 'Anxiety',imageUrl: 'https://m.media-amazon.com/images/I/71S+7nCBu1L._SY466_.jpg' },
  { title: 'Rejection Proof: How I Beat Fear and Became Invincible Through 100 Days of Rejection', author: ' Jia Jiang', category: 'Fear',imageUrl: "https://m.media-amazon.com/images/I/4144WlEOuTL._SY445_SX342_.jpg" },
  { title: 'Rising Strong', author: 'Brené Brown', category: 'Handling Rejection',imageUrl: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTuZtNNC-14HC--CyHGAtGbODVrPIozhoEITsUXQV771HGcjjcx' },


];
const Resources = () => {
    const [selectedCategory, setSelectedCategory] = useState('Popular');
    const categories = ['Fear', 'Anxiety', 'Handling Rejection'];
  
    return (
      <div className="resources-container">
        <h1 style={{ color: 'black' }}>Few Books that might help you</h1>
        <div className="button-group">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="books-grid">
          {books
            .filter((book) => book.category === selectedCategory)
            .map((book, index) => (
              <div key={index} className="book-card">
                <img src={book.imageUrl} alt={book.title} className="book-image" />
                <div className="book-info">
                  <strong>{book.title}</strong>
                  <p>by {book.author}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Resources;