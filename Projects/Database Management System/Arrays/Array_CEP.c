#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <string.h>
#include <windows.h>

#define Error( Str )        FatalError( Str )
#define FatalError( Str )   fprintf( stderr, "%s\n", Str ), exit( 1 )

    typedef struct Array ElementType; //ElementType is defined using typedef

    struct Array;
    typedef struct Array Arr_Rec;
    struct Array
    {
        int ID;
        char Name[20];
        char City[4];
        char Service;
    };   //Array_Entry is used to access the struct Array

// function to insert read values into another array
    void Insert( int Key, char Name[], char City[], char Service, Arr_Rec Arr[], int index );
    void
    Insert( int Key, char Name[], char City[], char Service, Arr_Rec Arr[], int index )
    {
        //Inserting values into their respective poitions
        Arr[ index ].ID   = Key;
        sprintf(Arr[ index ].Name, "%s", Name);
        sprintf(Arr[ index ].City, "%s", City);
        Arr[ index ].Service = Service;
        printf("ID %d Inserted at Index %d.\n", Key, index);
    }

    //print the inserted values of arrays
    void Print_Arrays( Arr_Rec Arr[], int Size);
    void
    Print_Arrays( Arr_Rec Arr[], int Size)
    {
        for (int i = 0; i < Size; i++)   //size is the size of file
        {
            if (Arr[ i ].ID == 0) continue;

            printf("Index[%d] ->\t", i);                  //int type index is printed
            printf("ID = %d,\t",        Arr[i].ID);       //print ID stored into Arr[] at ith index
            printf("Name = %s,\t",      Arr[i].Name);     //print Name stored into Arr[] at ith index
            printf("City = %s,\t",      Arr[i].City);     //print City stored into Arr[] at ith index
            printf("Service = %c\t",    Arr[i].Service);  //print Service_categorey stored into Arr[] at ith index
            printf("\n");

        }
    }


    // find the ID (key) that is given
    void Find(Arr_Rec Arr[],int size,int Key);
    void
    Find(Arr_Rec Arr[],int size,int Key)
    {
        for(int j = 0; j < size; j++)
        {
            if(Arr[ j ].ID == Key)
            {
                printf("\nKey = %d Found at Index = %d.\n", Key, j); //key is found
                break;
            }
        }
    }


    // If ID is find than delete it
    void Delete(Arr_Rec Arr[], int Size, int Key);
    void
    Delete(Arr_Rec Arr[], int Size, int Key)
    {
        for(int a = 0; a < Size; a++)
        {

            if(Arr[a].ID == Key)       //if the info got equals to the ID in file
            {

                Arr[a].ID = 0;                                  //nulls the ID stored into that information
                sprintf(Arr[a].Name, "%c", '\0');               //nulls the Name stored into that information
                sprintf(Arr[a].City, "%c", '\0');               //nulls the City name stored into that information
                Arr[a].Service = '\0';                          //nulls the Service categorey stored into that information
                printf("Deleted Information is = %d.\n", Key);  //also get the deleted key
            }
        }
    }

    // Sorts the array
        void
        selectionSort(Arr_Rec arr[], int n)
        {
            int i, j, min_idx;

            // One by one move boundary of unsorted subarray
            for (i = 0; i < n - 1; i++) {
                if (arr[i].ID == 0) continue;

                // Find the minimum element in unsorted array
                min_idx = i;
                for (j = i + 1; j < n - 1; j++)
                    if (arr[j].ID < arr[min_idx].ID)
                        min_idx = j;

                // Swap the found minimum element
                // with the first element
                Swap(&arr[min_idx].ID, &arr[i].ID);
                swap(arr[min_idx].Name, arr[i].Name);
                swap(arr[min_idx].City, arr[i].City);
                swap(&arr[min_idx].Service, &arr[i].Service);
            }
        }

        // Swaps elements given as argument
        void Swap(int *xp, int *yp);
        void
        Swap(int *xp, int *yp)
        {
            int temp = *xp;
            *xp = *yp;
            *yp = temp;
        }

        void swap(char *str1, char *str2);
        void swap(char *str1, char *str2)
        {
            char ch;
            int index = 0;

            while(str1[index] != '\0')
            {
              ch = str1[index];
              str1[index] = str2[index];
              str2[index] = ch;
              index++;
           }

        }

        int GetMemory (Arr_Rec Arr, int Size);
        int
        GetMemory (Arr_Rec Arr, int Size)
        {
            return ( Size* ( sizeof( Arr ) ) );
        }

int main()
{
    typedef struct Records
    {
        ElementType Arrx;
    }Rec;

    // Variables to measure Time Consumed and Array to store the number of records present in the file
    LARGE_INTEGER start_time, end_time, elapsed_time, frequency;
    QueryPerformanceFrequency(&frequency);
	char size_of_array[2][10];
	// FILE pointer to store the file
    FILE *fileptr;

    int x = 0;
    fileptr = fopen("data_10.txt", "r");

    if (fileptr == NULL)
    {
        printf("Error in Loading File.\n");
        exit(1);
    }
    else
    {
        printf("File Loaded.\n");
    }

    // Stores the number of records present in the file in an array.
    for (int a = 0; a < 2; a++)
    {
        fscanf(fileptr, "%s", size_of_array[a]);
    }

    // sizex stores the number of records in the file
    int sizex = atoi(size_of_array[1]);
    printf("size = %d.\n", sizex);

    // file_contents stores the records in the file
    Rec *file_contents = malloc( sizex * sizeof( Rec ) );
    if( file_contents == NULL )
          FatalError( "Out of space!!!" );

    // arr1 will be used later for sorting purposes.
    int *arr1 = malloc( sizex * sizeof ( int ) );
    if( arr1 == NULL )
        FatalError( "Out of space!!!" );

    QueryPerformanceCounter(&start_time); //start time
   // Stores the Records present in the file in the array.

    while(!feof(fileptr))
    {
        fscanf(fileptr, "%d", &file_contents[x].Arrx.ID);
        fscanf(fileptr, "%s", &file_contents[x].Arrx.Name);
        fscanf(fileptr, "%s", &file_contents[x].Arrx.City);
        fscanf(fileptr, "%s", &file_contents[x].Arrx.Service);
        x++;
    }
    QueryPerformanceCounter(&end_time); // end time
    elapsed_time.QuadPart = end_time.QuadPart - start_time.QuadPart;
	printf("\nThe Run Time of Storing Contents of File in Array is: %g\n\n", (((double) elapsed_time.QuadPart) / frequency.QuadPart));

	// Close the file
    fclose(fileptr);

    Arr_Rec *A = malloc(sizex*sizeof(Arr_Rec));
    if( A == NULL )
          FatalError( "Out of space!!!" );

    QueryPerformanceCounter(&start_time); //start time
    printf("\nInserting.\n");

    for (int a = 0; a < sizex; a++)
    {
        Insert(file_contents[a].Arrx.ID, file_contents[a].Arrx.Name, file_contents[a].Arrx.City, file_contents[a].Arrx.Service, A, a);
    }
    QueryPerformanceCounter(&end_time); // end time
    elapsed_time.QuadPart = end_time.QuadPart - start_time.QuadPart;
    printf("Memory Used For Inserting Records in Array is %d bytes.\n", GetMemory(*A, sizex) );
	printf("\nThe Run Time of Inserting Contents of File in Array is: %g\n\n", (((double) elapsed_time.QuadPart) / frequency.QuadPart));


    printf("\nPrinting.\n");
    Print_Arrays(A, sizex);

    QueryPerformanceCounter(&start_time); //start time
    printf("\nFinding.\n");
    for (int a = 0; a < sizex; a++)
    {
        if (a%2 == 0)
            Find(A, sizex, file_contents[a].Arrx.ID);
    }
    printf("Memory Used For Finding Records in Array is %d bytes.\n", GetMemory(*A, sizex) );

    QueryPerformanceCounter(&end_time); // end time
    elapsed_time.QuadPart = end_time.QuadPart - start_time.QuadPart;
	printf("\nThe Run Time of Finding Contents in Array is: %g\n\n", (((double) elapsed_time.QuadPart) / frequency.QuadPart));


    QueryPerformanceCounter(&start_time); //start time
    printf("Sorting.\n");
    selectionSort(A, sizex);
    printf("Memory Used For Sorting Records in Array is %d bytes.\n", GetMemory(*A, sizex) );
    printf("\nPrinting After Sort.\n");
    Print_Arrays (A, sizex);

    QueryPerformanceCounter(&end_time); // end time
    elapsed_time.QuadPart = end_time.QuadPart - start_time.QuadPart;
	printf("\nThe Run Time of Sorting in Array is: %g\n\n", (((double) elapsed_time.QuadPart) / frequency.QuadPart));

    QueryPerformanceCounter(&start_time); //start time
    printf("Deleting.\n");
    for (int a = 0; a < sizex; a++)
    {
        if (a%2 != 0)
            Delete(A, sizex, file_contents[a].Arrx.ID);
    }
    printf("Memory Used For Deleting Records in Array is %d bytes.\n", GetMemory(*A, sizex) );

    QueryPerformanceCounter(&end_time); // end time
    elapsed_time.QuadPart = end_time.QuadPart - start_time.QuadPart;
	printf("\nThe Run Time of Deleting Contents from Array is: %g\n\n", (((double) elapsed_time.QuadPart) / frequency.QuadPart));

    printf("\nPrinting After Deleting.\n");
    Print_Arrays (A, sizex);

    free( file_contents );
    free( arr1 );
    free( A );

    printf("\n\nProgram Terminated Successfully.\n");
    return 0;
}
