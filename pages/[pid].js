import React from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr'
import AppCard from "../components/AppCard";
import Container from "../components/Container";
import { useRouter } from 'next/router';
import { fetcher } from '../services';
import { CircularProgress } from '@material-ui/core';

const BreedAppCard = ({ id }) => {
    const { data, error } = useSWR(`/api/breeds/${id}`, fetcher);

    if (error)
        return <div>Failed to load</div>
    if (!data)
        return <CircularProgress />

    return <AppCard full breed={data} />
}

export default function Breed() {
    const router = useRouter();
    const { pid } = router.query
    return (
        <Container>
            <BreedAppCard id={pid} />
        </Container>
    );
}

BreedAppCard.propTypes = {
    id: PropTypes.number
}