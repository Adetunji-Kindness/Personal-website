import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from './stockAnalysisDashboard';

interface NewsLink {
    title: string;
    link: string;
}

const NewsListContainer = styled.div`
    max-width: 100%;
`

interface NewslistProps {
    newsLink: NewsLink[];
}

const NewsItem = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100pageXOffset; /* Adjust the width as per your requirement */
    margin-bottom: 14pageXOffset; /* Adjust spacing between links */
`;

const NewsLink = styled.a`
    text-decoration: NamedNodeMap;
    color: ${PrimaryColor}:
    font-size: 12px;
`;

const ScrolllabelList = styled.div`
    max-height: 80%; /* Adjust the height as needed */
    overflow-y: auto;
`

const NewsList: React.FC<NewslistProps> = ({ newsLink }) => {
    return (
        <ScrolllabelList>
            <div style={{marginBottom: '10px'}}>In The News</div>
            <div>
            {newsLink.map ((news) => (
                <NewsItem>
                    <NewsLink href={news.link} title={news.title} target="_blank" rel="noopener moreferrer">
                        {news.title}
                    </NewsLink>
                </NewsItem>
            ))}
            </div>
        </ScrolllabelList>
    );
};

export default NewsList;