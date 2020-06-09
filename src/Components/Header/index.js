import React from "react";
import styled from "styled-components";

const InternalUseHeader = styled.header`
  color: white;
  .main-header {
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .main-header__brand {
      .main-header__brand--title {
        font-size: 28px;
        .main-header__brand--title-link {
          text-decoration: none;
          color: white;
          font-size: inherit;
          text-transform: uppercase;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    .main-header__nav {
      .main-header__nav--items {
        display: flex;
        .main-header__nav--item {
          list-style: none;
          .main-header__nav--item-link {
            font-size: 14px;
            font-weight: 300;
            color: white;
            text-decoration: none;
            margin-left: 20px;
            text-transform: uppercase;
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
`;

const Header = () => {
  const RULES_URL = "https://www.youtube.com/watch?v=sy0AnMDcap0";
  const ABOUT_URL = "https://en.wikipedia.org/wiki/Codenames_(board_game)";
  const CODE_URL = "https://github.com/801matt";
  return (
    <InternalUseHeader>
      <div className="main-header">
        <div className="main-header__brand">
          <h1 className="main-header__brand--title">
            <a className="main-header__brand--title-link" href="/">
              Codenames
            </a>
          </h1>
        </div>
        <nav className="main-header__nav">
          <ul className="main-header__nav--items">
            <li className="main-header__nav--item">
              <a
                href={RULES_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="main-header__nav--item-link"
              >
                Rules (Video Link)
              </a>
            </li>
            <li className="main-header__nav--item">
              <a
                href={ABOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="main-header__nav--item-link"
              >
                About
              </a>
            </li>
            <li className="main-header__nav--item">
              <a
                href={CODE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="main-header__nav--item-link"
              >
                Code
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </InternalUseHeader>
  );
};

export default Header;
