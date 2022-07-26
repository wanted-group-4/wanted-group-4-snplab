import React, { memo } from 'react';
import styled from 'styled-components';

interface IModalProps {
  visible: boolean;
  msg?: string;
  btn?: string;
  handleClick: () => void;
}

export default function Modal(props: IModalProps) {
  const { visible, msg = 'default message', btn = '확인', handleClick } = props;

  return (
    <TransLayer style={{ display: visible ? 'block' : 'none' }}>
      <div className="box">
        <div className="msg">{msg}</div>
        <button onClick={handleClick}>{btn}</button>
      </div>
    </TransLayer>
  );
}

const TransLayer = memo(styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: #00000098;

  .box {
    padding: 12px;
    width: 240px;
    height: 160px;
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 4px;
    z-index: 10000;
    font-size: 14px;

    .msg {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    button {
      padding: 12px;
      color: rgb(213, 44, 89);
      background-color: #fff;
    }
  }
`);
