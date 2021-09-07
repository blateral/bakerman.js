import Section from 'components/base/Section';
import Wrapper from 'components/base/Wrapper';
import Copy from 'components/typography/Copy';
import Heading from 'components/typography/Heading';
import { isAfter, isSameHour } from 'date-fns';
import * as React from 'react';
import styled from 'styled-components';
import { spacings } from 'utils/styles';
import BgImage from './../../../public/Bodensee_Therme_Welle-02 1.jpg';

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
    padding-left: 20px;

    & + & {
        border-left: 1px solid #000;
    }
`;

const HeadTitle = styled(Copy)`
    text-transform: uppercase;
    font-weight: 600 !important;
    letter-spacing: 3.7px;
`;

const TableRow = styled.tr<{ activeItem?: number }>`
    &:nth-child(${({ activeItem }) => (activeItem ? activeItem + 1 : 1)}) {
        background: rgba(223, 161, 133, 0.4);
        & * {
            font-weight: 700;
        }
    }
`;

const TableData = styled.td`
    border-left: 1px solid #000;
    border-top: 1px solid #000;
    padding: 20px;

    &:first-of-type {
        border-left: none;
    }
`;

const BackgroundDecorator = styled.img`
    position: absolute;
    z-index: -1;
    left: 0;
    bottom: 0;
`;

const InfusionList: React.FC<{
    title?: string;
    rowTitle?: string[];
    row: {
        cols: {
            time: string;
            data: string[];
        };
    }[];
}> = ({ title, rowTitle, row }) => {
    const isValidTime = (_time: string) =>
        _time &&
        (_time === '24:00' ||
            _time.match(/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/));
    const lastThreeItems = row.slice(-3);
    const timeFilteredArray = row.filter(({ cols }) => {
        const entryTime = new Date();

        if (cols.time && isValidTime(cols.time)) {
            const timeParts = cols.time.split(':');

            entryTime.setHours(+timeParts[0], +timeParts[1]);
            const currentTime = new Date();

            if (isSameHour(entryTime, currentTime)) {
                return true;
            }
            if (isAfter(entryTime, currentTime)) {
                return true;
            }
        }
        return false;
    });
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
                            {timeFilteredArray.length < 3
                                ? lastThreeItems.map(mapLastListEntries)
                                : timeFilteredArray.map(mapListEntry)}
                            <tr></tr>
                        </tbody>
                    </Table>
                </Content>
            </Wrapper>
            <BackgroundDecorator src={BgImage} />
        </StyledSection>
    );
};

const mapListEntry = ({ cols }: { cols: any }, i: number) => {
    if (i > 4) return null;
    return (
        <TableRow key={i}>
            <TableData>
                <Copy size="regular">{cols.time}</Copy>
            </TableData>
            {cols.data.map((col: any, ii: number) => {
                return (
                    <TableData key={ii}>
                        <Copy size="regular">{col}</Copy>
                    </TableData>
                );
            })}
        </TableRow>
    );
};

const isValidTime = (_time: string) =>
    _time &&
    (_time === '24:00' ||
        _time.match(/^(0[0-9]|1[0-9]|2[0-3]|[0-9]):[0-5][0-9]$/));

const mapLastListEntries = ({ cols }: { cols: any }, i: number) => {
    const entryTime = new Date();
    let isActiveItem = false;
    if (cols.time && isValidTime(cols.time)) {
        const timeParts = cols.time.split(':');

        entryTime.setHours(+timeParts[0], +timeParts[1]);
        const currentTime = new Date();

        if (isSameHour(entryTime, currentTime)) {
            isActiveItem = true;
        }
    }
    return (
        <TableRow key={i} activeItem={isActiveItem ? i : -1}>
            <TableData>
                <Copy size="regular">{cols.time}</Copy>
            </TableData>
            {cols.data.map((col: any, ii: number) => {
                return (
                    <TableData key={ii}>
                        <Copy size="regular">{col}</Copy>
                    </TableData>
                );
            })}
        </TableRow>
    );
};

export default InfusionList;
