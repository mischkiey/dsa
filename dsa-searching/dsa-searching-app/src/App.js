import React, { Component } from 'react';

class App extends Component {
    state = {
        dataSet: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5],
        // dataSet: [0, 1, 2, 3, 4],
        runCount: 0,
        searchResults: '',
        searchType: '',
    };

    handleLinearSearch = (e) => {
        e.preventDefault();

        const query = e.target.query.value;

        for(let i = 0; i < this.state.dataSet.length; i++) {
            console.log(this.state.dataSet[i])
            if(this.state.dataSet[i] === Number(query)) {
                this.setState({searchResults: `Query found after ${i+1} tries`});
                return;
            };
        };

        this.setState({searchResults: `Linear Search Results: Query not found after ${this.state.dataSet.length} tries`});
    };

    handleBinarySearch = (e) => {
        e.preventDefault();

        let sortedDataSet = this.state.dataSet.sort((a, b) => a-b);
        const query = Number(e.target.query.value);
        console.log(sortedDataSet)

        this.setState({searchResults: this.binarySearch(sortedDataSet, query)});
    };

    binarySearch = (array, query, start = 0, end = array.length, count = 1) => {
        if (start >= end) {
            return `Binary Search Results: Query not found after ${count} tries`;
        };

        const i = Math.floor((start + end)/2);
        console.log(array[i], start, end)

        if (query === array[i]) {
            return `Binary Search Results: Query found after ${count} try/tries`;
        }
        else if (query < array[i]) {
            return this.binarySearch(array, query, start, end = i-1, ++count);
        }
        else if (query > array[i]) {
            return this.binarySearch(array, query, start = i+1, end, ++count);
        };
    };

    displaySearchResults = () => {
        return (
                <p>{this.state.searchResults}</p>
            )
    };

    render() {
        return (
            <main className='App'>
              <form onSubmit={(e) => this.state.searchType(e)}>
                    {/* <label htmlFor='query'>Search Query: </label> */}
                    <input id='query' type='text' />
                    {/* <label htmlFor='dataset'>Data Set</label> */}
                    {/* <textarea id='dataset'></textarea> */}
                    <button
                        onClick={() => this.setState({searchType: this.handleLinearSearch})}
                    >
                        Linear Search
                    </button>
                    <button
                        onClick={() => this.setState({searchType: this.handleBinarySearch})}
                    >
                        Binary Search
                    </button>
              </form>
              {this.state.searchResults ? this.displaySearchResults() : ''}
            </main>
          )
    };
};

export default App;