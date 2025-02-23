import { z as zod } from 'zod';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { toast } from 'src/components/snackbar';
import { Form, Field } from 'src/components/hook-form';

// ----------------------------------------------------------------------

export const InquirySchema = zod.object({
  period: zod.string().min(1, { message: 'Period is required!' }),
  dateOfEnquiry: zod.string().min(1, { message: 'Date of enquiry is required!' }),
  type: zod.string().min(1, { message: 'Type is required!' }),
  source: zod.string().min(1, { message: 'Source is required!' }),
  name: zod.string().min(1, { message: 'Name is required!' }),
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Email must be a valid email address!' }),
  contactNumber: zod.string().min(1, { message: 'Contact number is required!' }),
  employee: zod.string().min(1, { message: 'Employee is required!' }),
  studentName: zod.string().min(1, { message: 'Student name is required!' }),
  birthDate: zod.string().min(1, { message: 'Birth date is required!' }),
  gender: zod.string().min(1, { message: 'Gender is required!' }),
  course: zod.string().min(1, { message: 'Course is required!' }),
  remarks: zod.string(),
  file: zod.any().optional(),
});

// ----------------------------------------------------------------------

export function UserNewEditForm({ currentInquiry }) {
  const router = useRouter();

  const defaultValues = useMemo(
    () => ({
      period: currentInquiry?.period || '',
      dateOfEnquiry: currentInquiry?.dateOfEnquiry || '',
      type: currentInquiry?.type || '',
      source: currentInquiry?.source || '',
      name: currentInquiry?.name || '',
      email: currentInquiry?.email || '',
      contactNumber: currentInquiry?.contactNumber || '',
      employee: currentInquiry?.employee || '',
      studentName: currentInquiry?.studentName || '',
      birthDate: currentInquiry?.birthDate || '',
      gender: currentInquiry?.gender || '',
      course: currentInquiry?.course || '',
      remarks: currentInquiry?.remarks || '',
      file: currentInquiry?.file || null,
    }),
    [currentInquiry]
  );

  const methods = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(InquirySchema),
    defaultValues,
  });

  const {
    reset,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast.success(currentInquiry ? 'Update success!' : 'Create success!');
      router.push(paths.dashboard.inquiry.list);
      console.info('DATA', data);
    } catch (error) {
      console.error(error);
    }
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Grid container spacing={3}>
        <Grid xs={12}>
          <Card sx={{ p: 3 }}>
            <Box
              rowGap={3}
              columnGap={2}
              display="grid"
              gridTemplateColumns={{
                xs: 'repeat(1, 1fr)',
                sm: 'repeat(4, 1fr)',
              }}
            >
              {/* Inquiry Details - 4 columns */}
              <FormControl fullWidth sx={{ gridColumn: 'span 1' }}>
                <InputLabel>Select Period</InputLabel>
                <Select name="period" label="Select Period" defaultValue="">
                  <MenuItem value="daily">Daily</MenuItem>
                  <MenuItem value="weekly">Weekly</MenuItem>
                  <MenuItem value="monthly">Monthly</MenuItem>
                </Select>
              </FormControl>

              <Field.Text
                name="dateOfEnquiry"
                label="Date of Enquiry"
                type="date"
                sx={{ gridColumn: 'span 1' }}
              />

              <FormControl fullWidth sx={{ gridColumn: 'span 1' }}>
                <InputLabel>Type</InputLabel>
                <Select name="type" label="Type" defaultValue="">
                  <MenuItem value="general">General</MenuItem>
                  <MenuItem value="academic">Academic</MenuItem>
                  <MenuItem value="technical">Technical</MenuItem>
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ gridColumn: 'span 1' }}>
                <InputLabel>Source</InputLabel>
                <Select name="source" label="Source" defaultValue="">
                  <MenuItem value="website">Website</MenuItem>
                  <MenuItem value="phone">Phone</MenuItem>
                  <MenuItem value="email">Email</MenuItem>
                </Select>
              </FormControl>

              {/* Contact Information - 3 columns */}
              <Field.Text name="name" label="Name" sx={{ gridColumn: 'span 1' }} />
              <Field.Text name="email" label="Email" sx={{ gridColumn: 'span 1' }} />
              <Field.Text
                name="contactNumber"
                label="Contact Number"
                sx={{ gridColumn: 'span 1' }}
              />
              <Box sx={{ gridColumn: 'span 1' }} /> {/* Empty spacer to maintain 4-column layout */}

              {/* Employee - 1 column */}
              <FormControl fullWidth sx={{ gridColumn: 'span 4' }}>
                <InputLabel>Select Employee</InputLabel>
                <Select name="employee" label="Select Employee" defaultValue="">
                  <MenuItem value="employee1">Employee 1</MenuItem>
                  <MenuItem value="employee2">Employee 2</MenuItem>
                  <MenuItem value="employee3">Employee 3</MenuItem>
                </Select>
              </FormControl>

              {/* Student - 4 columns */}
              <Field.Text
                name="studentName"
                label="Student Name"
                sx={{ gridColumn: 'span 1' }}
              />
              <Field.Text
                name="birthDate"
                label="Birth Date"
                type="date"
                sx={{ gridColumn: 'span 1' }}
              />

              <FormControl component="fieldset" sx={{ gridColumn: 'span 1' }}>
                <Typography>Gender</Typography>
                <RadioGroup
                  row
                  name="gender"
                  defaultValue=""
                  onChange={(e) => methods.setValue('gender', e.target.value)}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Male" />
                  <FormControlLabel value="female" control={<Radio />} label="Female" />
                  <FormControlLabel value="other" control={<Radio />} label="Other" />
                </RadioGroup>
              </FormControl>

              <FormControl fullWidth sx={{ gridColumn: 'span 1' }}>
                <InputLabel>Select Course</InputLabel>
                <Select name="course" label="Select Course" defaultValue="">
                  <MenuItem value="course1">Course 1</MenuItem>
                  <MenuItem value="course2">Course 2</MenuItem>
                  <MenuItem value="course3">Course 3</MenuItem>
                </Select>
              </FormControl>

              {/* Remarks and File Upload - 2 columns */}
              <Field.Text
                name="remarks"
                label="Remarks"
                multiline
                rows={4}
                sx={{ gridColumn: 'span 2' }}
              />

              <Field.Upload
                name="file"
                label="Upload File"
                accept="application/pdf,application/doc,image/*"
                multiple={false}
                sx={{ gridColumn: 'span 2' }}
              />
            </Box>

            <Stack direction="row" justifyContent="space-between" sx={{ mt: 3 }}>
              <Box>
                <Button type="button" variant="outlined" onClick={() => reset()}>
                  Reset
                </Button>
                <FormControlLabel
                  control={<Switch name="keepAdding" />}
                  label="Keep Adding"
                  sx={{ ml: 2 }}
                />
              </Box>
              <Box>
                <Button type="button" variant="contained" color="error">
                  Cancel
                </Button>
                <Button type="submit" variant="contained" sx={{ ml: 2 }} disabled={isSubmitting}>
                  Save
                </Button>
              </Box>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </Form>
  );
}