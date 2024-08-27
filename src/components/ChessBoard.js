// src/components/ChessBoard.js
import React from 'react';
import { FaChessKing, FaChessQueen, FaChessRook, FaChessBishop, FaChessKnight, FaChessPawn } from 'react-icons/fa';

const ChessBoard = () => {
  const renderSquare = (i, piece) => {
    const isBlack = (i % 2 === 0);
    const className = isBlack ? 'square black' : 'square white';
    return (
      <div key={i} className={className}>
        {piece}
      </div>
    );
  };

  const renderRow = (row, pieces) => {
    return (
      <div key={row} className="row">
        {pieces.map((piece, i) => renderSquare(row * 8 + i, piece))}
      </div>
    );
  };

  const board = [
    [<FaChessRook />, <FaChessKnight />, <FaChessBishop />, <FaChessQueen />, <FaChessKing />, <FaChessBishop />, <FaChessKnight />, <FaChessRook />],
    Array(8).fill(<FaChessPawn />),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(<FaChessPawn />),
    [<FaChessRook />, <FaChessKnight />, <FaChessBishop />, <FaChessQueen />, <FaChessKing />, <FaChessBishop />, <FaChessKnight />, <FaChessRook />],
  ];

  return (
    <div className="chess-board">
      {board.map((pieces, i) => renderRow(i, pieces))}
    </div>
  );
};

export default ChessBoard;
