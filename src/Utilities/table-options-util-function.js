const setOptions=()=>{
    let options = {
        sorting: true,
        search: true,
        exportButton: true,
        filtering: true,
        grouping: true,
        fixedColumns: {
            left: 2
          },
        headerStyle: {
            backgroundColor: '#01579b',
            color: '#FFF'
        },
        cellStyle: {
            backgroundColor: '#000000',
            color: '#FFF'
        },
        searchFieldStyle:{
            color:'#01579b'
        }
    };
    return options;
}
export default function utils() {
	return {
        setOptions
    }
}