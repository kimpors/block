import Table from '../components/Table/Table';


const Plans = () =>
{
  const columns = ["", "Basic", "Standart", "Advanced"];
  const rows = [
    ["Monthly Fee", "0$", "2$", "3$"],
    ["Setup Fee", "0$", "0$", "0$"],
    ["Setup Fee", "0$", "0$", "0$"],
    ["Plan Name", "MK1", "MK2", "MK3"],
    ["Web Space", "5GB", 'Unlimited', "Unlimited"],
    ];

  return (
    <>
      <Table columns={ columns } rows={ rows } />
    </>
  )
}

export default Plans;
