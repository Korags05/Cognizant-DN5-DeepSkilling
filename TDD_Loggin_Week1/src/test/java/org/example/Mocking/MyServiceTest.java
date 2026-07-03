package org.example.Mocking;

import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.*;

public class MyServiceTest {

    @Test
    public void testExternalApi() {

        ExternalAPI mockApi = mock(ExternalAPI.class);

        when(mockApi.getData()).thenReturn("Mock Data");

        MyService service = new MyService(mockApi);

        String result = service.fetchData();

        assertEquals("Mock Data", result);
    }

    @Test
    public void testVerifyInteraction() {

        ExternalAPI mockApi = mock(ExternalAPI.class);

        MyService service = new MyService(mockApi);

        service.fetchData();

        verify(mockApi).getData();
    }
}