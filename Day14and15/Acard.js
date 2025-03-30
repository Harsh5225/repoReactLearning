import React from "react";
import Details from "./Details";

const cart = [
  { id: 1, food: "Pizza", price: 250 },
  { id: 2, food: "Burger", price: 150 },
  { id: 3, food: "Pasta", price: 200 },
  { id: 4, food: "Sandwich", price: 120 },
  { id: 5, food: "French Fries", price: 100 },
  { id: 6, food: "Chicken Wings", price: 300 },
  { id: 7, food: "Salad", price: 180 },
  { id: 8, food: "Tacos", price: 220 },
  { id: 9, food: "Noodles", price: 190 },
  { id: 10, food: "Dosa", price: 140 },
  { id: 11, food: "Ice Cream", price: 90 },
];

const Acard = () => {
  return (
    <div style={styles.container}>
      {cart.map((value) => (
        <div key={value.id} style={styles.card}>
          <Details {...value} />
        </div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    padding: "20px",
    maxWidth: "1200px",
    margin: "auto",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    border: "1px solid #eee",
  },
  cardHover: {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
  },
};

export default Acard;
