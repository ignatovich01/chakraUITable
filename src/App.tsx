import { Header } from "./components/Header/Header";
import { MainTable } from "./components/MainTable";
import { ToolBar } from "./components/ToolBar";
import { tableHeaders } from "./data/Interface";
import { mockTableData } from "./data/mockData";

const App = () => {
  return (
    <div>
      <Header />
      <ToolBar />
      <MainTable data={mockTableData} headers={tableHeaders} />
    </div>
  );
};

export default App;
