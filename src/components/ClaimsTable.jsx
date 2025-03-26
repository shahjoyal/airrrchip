import React, { useState } from "react";

function ClaimsTable() {
  const totalEntries = 40;
  const entriesPerPage = 8;
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const claims = Array(entriesPerPage).fill({
    referenceId: "#IAR-1234-12345",
    claimantName: "John Doe",
    vehicleNo: "MH12AB1234",
    insurance: "NIC",
    handler: "Hitesh Sutar",
    status: "Repair Approved",
    createdOn: "21 Feb, 2020",
    lastUpdated: "21 Feb, 2020",
  });

  const startEntry = (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  return (
    <div className="claims-table">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Reference ID</th>
            <th>Claimant Name</th>
            <th>Vehicle No.</th>
            <th>Insurance</th>
            <th>Claim Handler</th>
            <th>Status</th>
            <th>Created On</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {claims.map((claim, index) => (
            <tr key={index}>
              <td>{startEntry + index}</td>
              <td>{claim.referenceId}</td>
              <td>{claim.claimantName}</td>
              <td>{claim.vehicleNo}</td>
              <td>{claim.insurance}</td>
              <td>{claim.handler}</td>
              <td className="status">{claim.status}</td>
              <td>{claim.createdOn}</td>
              <td>{claim.lastUpdated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Container */}
      <div className="pagination-container">
        {/* Showing X to Y of Z (Aligned to Left) */}
        <div className="pagination-info">
          Showing {startEntry} to {endEntry} of {totalEntries} entries
        </div>

        {/* Pagination (Aligned to Right) */}
        <div className="pagination">
          <button 
            className="page-btn" 
            disabled={currentPage === 1} 
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i} 
              className={`page-btn ${currentPage === i + 1 ? "active" : ""}`} 
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button 
            className="page-btn" 
            disabled={currentPage === totalPages} 
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ClaimsTable;
