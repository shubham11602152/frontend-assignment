import React, { useState, useEffect } from "react";
import Table from "./components/common/Table";
import Pagination from "./components/common/Pagination";
import GlobalStyles from "./components/common/GlobalStyles";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const RECORDS_PER_PAGE = 10;

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("/frontend-assignment.json");
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const totalPages = Math.ceil(projects.length / RECORDS_PER_PAGE) || 1;
  const displayedProjects = projects.slice(
    (currentPage - 1) * RECORDS_PER_PAGE,
    currentPage * RECORDS_PER_PAGE
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <GlobalStyles />
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>
          Frontend Assignment
        </h1>
        {isLoading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <>
            <Table
              projects={displayedProjects}
              totalRecords={RECORDS_PER_PAGE}
            />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </>
  );
};

export default App;
