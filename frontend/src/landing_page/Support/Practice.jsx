function Practice({}) {
  return (
    <>
      <div
        className="ps-2 mb-5"
        style={{ backgroundColor: "orange", height: "150px" }}
      >
        <div
          className="p-3"
          style={{ backgroundColor: "#fce8ceff", height: "150px" }}
        >
          <ul>
            <li className="mb-3">
              <a href="#">Quarterly Settlement of Funds - July 2025</a>
            </li>
            <li>
              <a href="#">
                Exclusion of F&O contracts on 8 securities from August 29, 2025
              </a>
            </li>
          </ul>
        </div>
      </div>
      <table class="table border">
        <thead>
          <tr>
            <th scope="col" className="ps-4" style={{ fontSize: "17px" }}>
              Quick links
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a
                href="#"
                className="text-decoration-none ps-3"
                style={{ fontSize: "17px" }}
              >
                1. Track account opening
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="#"
                className="text-decoration-none ps-3"
                style={{ fontSize: "17px" }}
              >
                2. Track segment activation
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="#"
                className="text-decoration-none ps-3"
                style={{ fontSize: "17px" }}
              >
                3. Intraday margins
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <a
                href="#"
                className="text-decoration-none ps-3"
                style={{ fontSize: "17px" }}
              >
                4. Kite user manual
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Practice;
