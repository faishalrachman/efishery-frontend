import React from 'react'
import PokeInfo from '../PokeInfo/PokeInfo'
import pokeService from '../../services/PokeService'
import InfiniteScroll from "react-infinite-scroll-component";
import { Table } from 'react-bootstrap'
import './PokeList.scss'
class PokeList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listPokemon: [{
                name: "",
                image: "",
            },
            ],
            is_loading: true,
            page: 1
        }
        const savedState = localStorage.getItem("savedState")
        const detailState = localStorage.getItem("from_detail")
        if (detailState === "true" && savedState != null) {
            this.state = JSON.parse(savedState)
            localStorage.setItem("from_detail", "false")
        }
        this.fetchMoreData = this.fetchMoreData.bind(this)
    }

    componentDidMount() {
        if (this.state.listPokemon.length < 10) {

            pokeService.getAll(this.state.page)
                .then((pokeData) => {
                    this.setState((prevState) => {
                        return {
                            listPokemon: pokeData,
                            page: 1,
                            is_loading: false
                        }
                    })
                    // console.log(this.state)
                })

        }

    }
    componentWillUnmount() {
        localStorage.setItem("savedState", JSON.stringify(this.state))
    }
    fetchMoreData() {
        var page = this.state.page + 1
        pokeService.getAll(page)
            .then((pokeData) => {
                this.setState((prevState) => {
                    return {
                        listPokemon: pokeData,
                        page: page,
                        is_loading: false
                    }
                })
            })
    }

    render() {
        return (
            <div>
                <h2>Pokédex Master Data</h2>
                {!this.state.is_loading &&
                    <InfiniteScroll
                        dataLength={this.state.listPokemon.length}
                        next={this.fetchMoreData}
                        hasMore={true}
                        loader={<div className="loader"></div>}
                    >
                        <Table bordered striped className="table-centered">

                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Type</th>
                                    <th>Max HP</th>
                                    <th>Max CP</th>
                                    <th>Resistant</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.listPokemon.map((data, i) => {
                                    return <PokeInfo info={data} key={i} />
                                })}
                            </tbody>
                        </Table>
                    </InfiniteScroll>

                }
                {this.state.is_loading && <p>Loading...</p>}
            </div>
        )
    }
}
export default PokeList