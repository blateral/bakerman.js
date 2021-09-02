import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import * as React from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const StyledSection = styled(Section)`
    position: relative;
    padding: 80px;
`;

const Content = styled.div`
    margin: 0 auto;

    & > * + * {
        margin-top: ${spacings.spacer * 4}px;
    }

    text-align: center;
`;

const Table = styled.table`
    border-bottom: 1px solid #000;
    border-collapse: collapse;
    width: 100%;
    text-align: left;
`;

const TableHead = styled.th`
    padding: 20px 80px;

    & + & {
        border-left: 1px solid #000;
    }
`;

const HeadTitle = styled(Copy)`
    text-transform: uppercase;
    font-weight: 600 !important;
    letter-spacing: 3.7px;
`;

const TableRow = styled.tr`
    &:nth-child(1) {
        background: antiquewhite;
        & * {
            font-weight: 700;
        }
    }
`;

const TableData = styled.td`
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    padding: 20px 80px;

    &:first-of-type {
        border-left: none;
    }
`;

const BackgroundDecorator = styled.img`
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
`;

const InfusionList: React.FC<{
    title?: string;
    rowTitle?: string[];
    row: {
        cols: string[];
    }[];
    bgImage?: { src?: string; alt?: string };
}> = ({ title, rowTitle, row, bgImage }) => {
    return (
        <StyledSection>
            <Wrapper>
                <Content>
                    <Heading size={2}>{title}</Heading>
                    <Table>
                        {rowTitle && (
                            <thead>
                                <tr>
                                    {rowTitle.map((title, i) => {
                                        return (
                                            <TableHead key={i}>
                                                <HeadTitle size="large">
                                                    {title}
                                                </HeadTitle>
                                            </TableHead>
                                        );
                                    })}
                                </tr>
                            </thead>
                        )}
                        <tbody>
                            {row.map(({ cols }, i) => {
                                return (
                                    i < 5 && (
                                        <TableRow key={i}>
                                            {cols.map((col, ii) => {
                                                return (
                                                    <TableData key={ii}>
                                                        <Copy size="large">
                                                            {col}
                                                        </Copy>
                                                    </TableData>
                                                );
                                            })}
                                        </TableRow>
                                    )
                                );
                            })}
                            <tr></tr>
                        </tbody>
                    </Table>
                </Content>
            </Wrapper>
            {bgImage && (
                <BackgroundDecorator
                    src={bgImage.src}
                    alt={bgImage.alt || ''}
                />
            )}
        </StyledSection>
    );
};

export default InfusionList;
