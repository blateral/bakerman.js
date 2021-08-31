import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import * as React from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';

const StyledSection = styled(Section)`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const Content = styled.div`
    margin: 0 auto;

    & > * + * {
        margin-top: ${spacings.spacer * 2}px;
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
    font-weight: 500;
    text-transform: uppercase;
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

const InfusionList: React.FC<{
    title?: string;
    rowTitle?: string[];
    row: {
        cols: string[];
    }[];
}> = ({ title, rowTitle, row }) => {
    return (
        <StyledSection>
            <Wrapper>
                <Content>
                    <Heading size={1}>{title}</Heading>
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
                                                        <Copy>{col}</Copy>
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
        </StyledSection>
    );
};

export default InfusionList;
