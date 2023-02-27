import React, { useEffect, useState } from "react";
import OneElement from "../Components/OneElement";
import Pagination from "../Components/Pagination";
import { getAllDatas } from "../Services/Services";
import "./PageListe.css";
export default function PageListe() {
  const [datas, setDatas] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const posts = datas.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    getAllDatas(setDatas);
  }, []);
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "2vh" }}>LISTE COINS</h1>
      <div></div>
      <div className="pagelist">
        {posts.map((data, index) => (
          <OneElement
            key={index}
            image={data.image}
            nom={data.name}
            prix={data.current_price}
          />
        ))}
      </div>
      <Pagination
        totalPosts={datas.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}
