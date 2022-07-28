import React from "react";
import styled, { css } from "styled-components";

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;

    img {
      height: 400px;
      width: 100%;
      border-radius: 8px;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    background-color: #fff;
    padding: 20px;
    border-radius: 20px;
    bottom: 0;
    z-index: 10;

    .card-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;

      .card-user {
        display: flex;
        align-items: center;
        column-gap: 12px;

        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 100rem;
          object-fit: cover;
          flex-shrink: 0;
        }

        .username {
          font-weight: 300;
          font-size: 16px;
          color: #333;
        }
      }
      .card-meta {
        display: flex;
        align-items: center;
        column-gap: 12px;
      }
    }
  }

  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
      font-size: 18px;
      font-weight: 500;
      color: ${(props) => props.theme.colors.orange};
    }
    span {
      font-size: ${(props) => props.fontsize || "18px"};
      font-weight: bold;
      background: linear-gradient(
        86.88deg,
        #7d6aff 1.38%,
        #ffb86c 64.35%,
        #fc2872 119.91%
      );
      color: transparent;
      ${(props) =>
        props.secondary &&
        css`
          background: linear-gradient(
            86.88deg,
            #20e3b2 1.38%,
            #ffb86c 64.35%,
            #2cccff 119.91%
          );
        `};
      -webkit-background-clip: text;
      background-clip: text;
    }
  }
`;

const Card2 = (props) => {
  return (
    <StyledCard secondary={props.secondary || ""}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=768x576&vertical=top"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?compress=1&resize=768x576&vertical=top"
              alt=""
              className="avatar"
            />
            <span className="username">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src="/tim.svg" alt="tym" />
            <span className=" text-[red]">256</span>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="">Cosmic Perspective</h3>
          <span>12,000 PSL</span>
        </div>
      </div>
    </StyledCard>
  );
};

export default Card2;
