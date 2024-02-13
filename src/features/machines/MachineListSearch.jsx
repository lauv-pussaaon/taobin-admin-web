import styled from "styled-components";
import Input from "../../ui/components/Input";
import Button from "../../ui/components/Button";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1.6rem;
`;

function MachineListSearch() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [searchTerm, setSearchTerm] = useState(
        searchParams.get("term") || ""
    );

    useEffect(() => {
        setSearchTerm(searchParams.get("term") || "");
    }, [searchParams]);

    function handleSearchTerm(e) {
        setSearchTerm(e.target.value);
    }

    function handleSearch() {
        setSearchParams({ term: searchTerm });
    }

    function handleKeyDown(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSearch();
        }
    }

    return (
        <Container>
            <Input
                type="text"
                id="search-term"
                value={searchTerm}
                onKeyDown={handleKeyDown}
                placeholder="Machine name"
                onChange={handleSearchTerm}
            />
            <Button variation="secondary" onClick={handleSearch}>
                Search
            </Button>
        </Container>
    );
}

export default MachineListSearch;
