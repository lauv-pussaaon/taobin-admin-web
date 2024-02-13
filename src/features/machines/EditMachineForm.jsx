import { getTodayString, formatTimeString } from "../../utils/datetimeHelper";
import { useForm } from "react-hook-form";
import { FaMugHot, FaTemperatureArrowDown } from "react-icons/fa6";
import { useUpdateMachine } from "./hooks/useUpdateMachine";
import Button from "../../ui/components/Button";
import Heading from "../../ui/components/Heading";
import {
    Form,
    FormRow,
    Input,
    InputWrapper,
    Label,
    Error,
} from "./CreateEditFormStyle";

function EditMachineForm({ machine, onCloseModal }) {
    const { updateMachine, isUpdating } = useUpdateMachine();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        defaultValues: {
            ...machine,
            openTime: formatTimeString(machine.openTime),
            closeTime: formatTimeString(machine.closeTime),
        },
    });

    function onSubmit(data) {
        updateMachine(data, {
            onSuccess: () => {
                reset();
                onCloseModal?.();
            },
        });
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Heading as="h2">Edit Machine Setting</Heading>
            <FormRow>
                <Label htmlFor="name">Machine Name</Label>
                <Input
                    type="text"
                    id="name"
                    disabled={isUpdating}
                    {...register("name", {
                        required: "This field is required.",
                    })}
                />
                {errors?.name?.message && <Error>{errors.name.message}</Error>}
            </FormRow>

            <FormRow>
                <Label htmlFor="status-active">Status</Label>
                <InputWrapper>
                    <Input
                        type="radio"
                        id="status-active"
                        value="active"
                        disabled={isUpdating}
                        {...register("status", {
                            required: "This field is required.",
                        })}
                    />
                    <span>active</span>
                    <Input
                        type="radio"
                        id="status-inactive"
                        value="inactive"
                        disabled={isUpdating}
                        {...register("status", {
                            required: "This field is required.",
                        })}
                    />
                    <span>inactive</span>
                </InputWrapper>
                {errors?.status?.message && (
                    <Error>{errors.status.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="openTime">Operation Hours</Label>
                <InputWrapper>
                    <span>Open: </span>
                    <Input
                        type="text"
                        id="openTime"
                        disabled={isUpdating}
                        defaultValue="00:00"
                        {...register("openTime", {
                            required: "This field is required.",
                        })}
                    />
                    <span>Close: </span>
                    <Input
                        type="text"
                        id="closeTime"
                        disabled={isUpdating}
                        defaultValue="00:00"
                        {...register("closeTime", {
                            required: "This field is required.",
                        })}
                    />
                </InputWrapper>
            </FormRow>

            <FormRow>
                <Label htmlFor="coldTemp">Cold Menu Temperature</Label>
                <InputWrapper>
                    <FaTemperatureArrowDown />
                    <Input
                        type="text"
                        size="small"
                        id="coldTemp"
                        disabled={isUpdating}
                        {...register("coldTemp", {
                            required: "This field is required.",
                        })}
                    />
                    <span>celcius</span>
                </InputWrapper>
                {errors?.coldTemp?.message && (
                    <Error>{errors.coldTemp.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="hotTemp">Hot Menu Temperature</Label>
                <InputWrapper>
                    <FaMugHot />
                    <Input
                        type="text"
                        size="small"
                        id="hotTemp"
                        disabled={isUpdating}
                        {...register("hotTemp", {
                            required: "This field is required.",
                        })}
                    />
                    <span>celcius</span>
                </InputWrapper>
                {errors?.hotTemp?.message && (
                    <Error>{errors.hotTemp.message}</Error>
                )}
            </FormRow>
            <FormRow>
                <Label htmlFor="installedDate">Installed Date</Label>
                <Input
                    type="date"
                    id="installedDate"
                    disabled={isUpdating}
                    defaultValue={getTodayString()}
                    {...register("installedDate")}
                ></Input>
                {errors?.installedDate?.message && (
                    <Error>{errors.installedDate.message}</Error>
                )}
            </FormRow>

            <FormRow>
                <Label htmlFor="address">Address</Label>
                <Input
                    type="text"
                    id="address"
                    disabled={isUpdating}
                    {...register("address", {
                        required: "This field is required",
                    })}
                ></Input>
                {errors?.address?.message && (
                    <Error>{errors.address.message}</Error>
                )}
            </FormRow>

            <FormRow>
                <Label htmlFor="city">City</Label>
                <Input
                    type="text"
                    id="city"
                    disabled={isUpdating}
                    defaultValue="Bangkok"
                    {...register("city", {
                        required: "This field is required",
                    })}
                />
                {errors?.city?.message && <Error>{errors.city.message}</Error>}
            </FormRow>
            <FormRow>
                <Label htmlFor="country">Country</Label>
                <Input
                    type="text"
                    id="country"
                    disabled={isUpdating}
                    defaultValue="Thailand"
                    {...register("country", {
                        required: "This field is required",
                    })}
                />
                {errors?.country?.message && (
                    <Error>{errors.country.message}</Error>
                )}
            </FormRow>

            <FormRow>
                <Button
                    variation="normal"
                    type="reset"
                    onClick={() => onCloseModal?.()}
                >
                    Cancel
                </Button>
                <Button disabled={isUpdating}>Update Machine</Button>
            </FormRow>
        </Form>
    );
}

export default EditMachineForm;
