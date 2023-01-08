import React from 'react';
import useListApplicationHook from './hook';
import Container from 'components/Container';
import HeaderTitle from 'components/HeaderTitle';
import ApplicationList from './components/ApplicationList';
import PdfViewComponent from 'components/PdfViewComponent';
import Fetching from 'components/Fetching';

export default function ListApplicationScreen(props) {
  const {
    loading,
    viewMore,
    applications,
    pdfUri,
    showCV,
    setShowCV,
    onEndReached,
    onPressViewProfile,
    onPressViewResume,
  } = useListApplicationHook(props);
  if (loading) {
    return <Fetching />;
  }

  return (
    <Container notSafeArea showBack>
      <HeaderTitle title={'List application'} />
      <ApplicationList
        data={applications}
        onPressViewProfile={onPressViewProfile}
        onPressViewResume={onPressViewResume}
        onEndReached={onEndReached}
      />
      {pdfUri ? (
        <PdfViewComponent
          visible={showCV}
          source={{
            uri: pdfUri,
            cache: true,
          }}
          onClose={() => setShowCV(false)}
        />
      ) : null}
    </Container>
  );
}
